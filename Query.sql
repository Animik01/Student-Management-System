-- SCHEMA: sms

-- DROP SCHEMA IF EXISTS sms ;

CREATE SCHEMA IF NOT EXISTS sms
    AUTHORIZATION postgres;


-- FUNCTION: sms.student_data(character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying)

-- DROP FUNCTION IF EXISTS sms.student_data(character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying);

CREATE OR REPLACE FUNCTION sms.student_data(
	i_std_first_name character varying,
	i_std_last_name character varying,
	i_std_mobile character varying,
	i_std_email character varying,
	i_std_address character varying,
	i_std_city character varying,
	i_std_state character varying,
	i_std_pincode character varying,
	i_created_by character varying,
	i_created_dt character varying,
	i_flag character varying)
    RETURNS TABLE(j json) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
declare v_count numeric;
BEGIN
	if (i_flag = '1') then
   		RETURN QUERY SELECT json_agg(resultmessage) FROM ( SELECT '1' AS issuccess, 'Successfully retrieved' AS message) resultmessage;
		INSERT INTO sms.students_details(std_first_name,std_last_name,std_mobile,std_email,std_address,
		std_city,std_state,std_pincode,created_by,created_dt) 
		VALUES (i_std_first_name,i_std_last_name,i_std_mobile,i_std_email,i_std_address,i_std_city,i_std_state,
		(i_std_pincode)::numeric,i_created_by,(i_created_dt)::date);
		
	elseif (i_flag = '0') then 
		select  count(*) into v_count from sms.students_details;
		RETURN QUERY SELECT json_agg(resultmessage) FROM (SELECT *,v_count from sms.students_details) resultmessage;
	end if;
	
END;
$BODY$;

ALTER FUNCTION sms.student_data(character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying, character varying)
    OWNER TO postgres;






-- Table: sms.students_details

-- DROP TABLE IF EXISTS sms.students_details;

CREATE TABLE IF NOT EXISTS sms.students_details
(
    std_id integer NOT NULL DEFAULT nextval('sms.students_details_std_id_seq'::regclass),
    std_first_name character varying(30) COLLATE pg_catalog."default",
    std_last_name character varying(30) COLLATE pg_catalog."default",
    std_mobile character varying(10) COLLATE pg_catalog."default",
    std_email character varying(50) COLLATE pg_catalog."default",
    std_address text COLLATE pg_catalog."default",
    std_city character varying(50) COLLATE pg_catalog."default",
    std_state character varying(50) COLLATE pg_catalog."default",
    std_pincode integer,
    created_by character varying(50) COLLATE pg_catalog."default",
    created_dt timestamp without time zone,
    CONSTRAINT students_details_pkey PRIMARY KEY (std_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS sms.students_details
    OWNER to postgres;
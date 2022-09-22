USE [MACT]
GO
/****** Object:  StoredProcedure [dbo].[FindUser]    Script Date: 9/21/2022 8:16:40 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sebastián Alpízar
-- Create date: 9/13/2022
-- Description:	Searches for users on DB
-- =============================================
ALTER PROCEDURE [dbo].[FindUser]
    -- Add the parameters for the stored procedure here
    @inEmail VARCHAR(255),
	@inPassword VARBINARY(8000)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DECLARE @RESULT INT = 0

    -- Insert statements for procedure here
	IF EXISTS(SELECT TOP 1 * FROM [dbo].[User] AS D WHERE D.email = @inEmail)
    BEGIN
			SET @RESULT = 1 --Usuario válido
			IF EXISTS(SELECT TOP 1 * FROM [dbo].[User] AS D WHERE HASHBYTES('SHA2_512', D.password) = HASHBYTES('SHA2_512', @inPassword))
            BEGIN
				SET @RESULT = 2 --Usuario y contraseña válidos
            END
            ELSE
            BEGIN
				SET @RESULT = 3 -- Existe el usuario pero la contraseña está mal
            END
    END

RETURN @RESULT
END

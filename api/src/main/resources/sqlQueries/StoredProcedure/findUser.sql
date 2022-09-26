USE [MACT]
GO
/****** Object:  StoredProcedure [dbo].[FindUser]    Script Date: 9/25/2022 9:34:21 PM ******/
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
	@inPassword VARBINARY(MAX)
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
			IF EXISTS(SELECT TOP 1 * FROM [dbo].[User] AS D WHERE D.password =@inPassword)
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

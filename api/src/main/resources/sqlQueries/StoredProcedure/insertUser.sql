USE MACT

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sebastián Alpízar
-- Create date: 9/13/2022
-- Description:	Insert new users on DB
-- =============================================
ALTER PROCEDURE InsertUser
    -- Add the parameters for the stored procedure here
    @inEmail VARCHAR(255),
    @inPassword VARCHAR(255)
    AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DECLARE @RESULT INT = 0

    -- Insert statements for procedure here
	IF NOT EXISTS(SELECT TOP 1 * FROM [dbo].[User] AS D WHERE D.email = @inEmail) AND @inPassword IS NOT NULL
BEGIN
INSERT INTO [dbo].[User] (email, password, lastLogin)
VALUES (@inEmail, HASHBYTES('SHA2_512', @inPassword), GETDATE())
SET @RESULT = 1
END

RETURN @RESULT
END
GO

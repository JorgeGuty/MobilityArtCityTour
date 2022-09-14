USE MACT

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sebastián Alpízar
-- Create date: 9/13/2022
-- Description:	Searches for users on DB
-- =============================================
CREATE PROCEDURE FindUser
    -- Add the parameters for the stored procedure here
    @inEmail VARCHAR(255)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DECLARE @RESULT INT = 0

    -- Insert statements for procedure here
	IF EXISTS(SELECT TOP 1 * FROM [dbo].[User] AS D WHERE D.email = @inEmail)
BEGIN
		SET @RESULT = 1
END

RETURN @RESULT
END
GO

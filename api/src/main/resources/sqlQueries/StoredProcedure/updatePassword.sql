USE [MACT]
GO
/****** Object:  StoredProcedure [dbo].[UpdatePassword]    Script Date: 9/25/2022 10:06:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sebastián Alpízar
-- Create date: 9/13/2022
-- Description:	Searches for users on DB
-- =============================================
ALTER PROCEDURE [dbo].[UpdatePassword]
    -- Add the parameters for the stored procedure here
    @inEmail VARCHAR(255),
    @inPassword VARBINARY(MAX),
    @inNewPassword VARBINARY(MAX)
AS
BEGIN
    -- SET NOCOUNT ON added to prevent extra result sets from
    -- interfering with SELECT statements.
    SET NOCOUNT ON;

    DECLARE @RESULT INT = 0

    BEGIN TRY

        -- Insert statements for procedure here
        IF EXISTS(SELECT TOP 1 * FROM [dbo].[User] AS D WHERE D.email = @inEmail AND D.password = @inPassword)
            BEGIN
                UPDATE [dbo].[User]
                SET password = @inNewPassword
                WHERE email = @inEmail AND password = @inPassword
                SET @RESULT = 1
            END

    END TRY
    BEGIN CATCH
        --Insercion del error en tabla DB_Errores
        INSERT INTO [dbo].[DB_Errores]
        VALUES	(SUSER_SNAME(),
                   ERROR_NUMBER(),
                   ERROR_STATE(),
                   ERROR_SEVERITY(),
                   ERROR_LINE(),
                   ERROR_PROCEDURE(),
                   ERROR_MESSAGE(),
                   GETDATE());

    END CATCH

    RETURN @RESULT
END

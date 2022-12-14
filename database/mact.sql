
DROP TABLE IF EXISTS [dbo].[DB_Errores]
/****** Object:  Table [dbo].[DB_Errores]    Script Date: 9/26/2022 2:09:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[DB_Errores](
	[ErrorID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](100) NULL,
	[ErrorNumber] [int] NULL,
	[ErrorState] [int] NULL,
	[ErrorSeverity] [int] NULL,
	[ErrorLine] [int] NULL,
	[ErrorProcedure] [varchar](max) NULL,
	[ErrorMessage] [varchar](max) NULL,
	[ErrorDateTime] [datetime] NULL,
 CONSTRAINT [PK_DB_Errores] PRIMARY KEY CLUSTERED 
(
	[ErrorID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

DROP TABLE IF EXISTS [dbo].[Ruta_Parada_Usuario]

/****** Object:  Table [dbo].[Ruta_Parada_Usuario]    Script Date: 9/26/2022 2:09:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Ruta_Parada_Usuario](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[ruta_id] [int] NOT NULL,
	[parada_id] [int] NOT NULL,
	[user_id] [int] NOT NULL,
	[fechaVisitado] [datetime] NOT NULL,
	[visitado] [bit] NOT NULL,
 CONSTRAINT [PK_Ruta_Parada_Usuario] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

DROP TABLE IF EXISTS [dbo].[User]

/****** Object:  Table [dbo].[User]    Script Date: 9/26/2022 2:09:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[email] [varchar](255) NOT NULL,
	[password] [varbinary](1000) NOT NULL,
	[lastLogin] [datetime] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO


/****** Object:  StoredProcedure [dbo].[FindUser]    Script Date: 9/26/2022 2:09:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sebastián Alpízar
-- Create date: 9/13/2022
-- Description:	Searches for users on DB
-- =============================================
CREATE PROCEDURE [dbo].[FindUser]
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
GO
/****** Object:  StoredProcedure [dbo].[InsertUser]    Script Date: 9/26/2022 2:09:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sebastián Alpízar
-- Create date: 9/13/2022
-- Description:	Insert new users on DB
-- =============================================
CREATE PROCEDURE [dbo].[InsertUser]
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
	IF NOT EXISTS(SELECT TOP 1 * FROM [dbo].[User] AS D WHERE D.email = @inEmail) AND @inPassword IS NOT NULL
	BEGIN
		INSERT INTO [dbo].[User] (email, password, lastLogin)
		VALUES (@inEmail, @inPassword, GETDATE())
		SET @RESULT = 1
	END

	RETURN @RESULT
END
GO
/****** Object:  StoredProcedure [dbo].[UpdatePassword]    Script Date: 9/26/2022 2:09:45 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Sebastián Alpízar
-- Create date: 9/13/2022
-- Description:	Searches for users on DB
-- =============================================
CREATE PROCEDURE [dbo].[UpdatePassword]
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
GO
USE [master]
GO
ALTER DATABASE [MACT] SET  READ_WRITE 
GO

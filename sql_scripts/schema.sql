USE [MarcoPoloGCDB]
GO
/****** Object:  Table [dbo].[GcOutlet]    Script Date: 4/30/2018 3:59:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GcOutlet](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[GiftCertId] [int] NULL,
	[OutletId] [int] NULL,
	[LastModifiedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
	[Active] [bit] NULL,
 CONSTRAINT [PK_GCOutlet] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[GcPurchase]    Script Date: 4/30/2018 3:59:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GcPurchase](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[GiftCertId] [int] NULL,
	[PurchaseDate] [datetime] NULL,
	[LastModifiedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
	[Active] [bit] NULL,
	[Remarks] [text] NULL,
	[PaymentMode] [varchar](50) NULL,
	[CcNumber] [varchar](50) NULL,
	[ExpirationDate] [datetime] NULL,
	[CardType] [varchar](50) NULL,
 CONSTRAINT [PK_GCPurchase] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[GcRedemption]    Script Date: 4/30/2018 3:59:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GcRedemption](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[GiftCertId] [int] NULL,
	[RedemptionDate] [datetime] NULL,
	[LastModifiedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [int] NULL,
	[Active] [bit] NULL,
	[Remarks] [text] NULL,
 CONSTRAINT [PK_GCRedemption] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[GcServicesType]    Script Date: 4/30/2018 3:59:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GcServicesType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ServicesTypeId] [int] NULL,
	[LastModifiedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
	[GiftCertId] [int] NULL,
	[Active] [bit] NULL,
 CONSTRAINT [PK_GCServicesType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[GcType]    Script Date: 4/30/2018 3:59:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GcType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LastModifiedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
	[Name] [varchar](50) NULL,
	[Active] [bit] NULL,
 CONSTRAINT [PK_GCType_1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[GiftCert]    Script Date: 4/30/2018 3:59:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GiftCert](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[GcTypeId] [int] NULL,
	[Value] [decimal](9, 2) NULL,
	[IssuanceDate] [datetime] NULL,
	[DtiPermitNo] [varchar](150) NULL,
	[ExpirationDate] [datetime] NULL,
	[LastModifiedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
	[QrCode] [varchar](25) NULL,
	[Active] [bit] NULL,
	[GiftCertNo] [varchar](50) NULL,
	[Note] [text] NULL,
 CONSTRAINT [PK_GiftCertificate] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
/****** Object:  Table [dbo].[Outlet]    Script Date: 4/30/2018 3:59:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Outlet](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](150) NULL,
	[LastModifiedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
	[Active] [bit] NULL,
 CONSTRAINT [PK_Outlet] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ServicesType]    Script Date: 4/30/2018 3:59:28 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ServicesType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[LastModifiedBy] [varchar](50) NULL,
	[CreatedDate] [datetime] NULL,
	[ModifiedDate] [datetime] NULL,
	[Name] [varchar](max) NULL,
	[Active] [bit] NULL,
 CONSTRAINT [PK_ServicesType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
ALTER TABLE [dbo].[GcOutlet]  WITH CHECK ADD  CONSTRAINT [FK_GcOutlet_GiftCert] FOREIGN KEY([GiftCertId])
REFERENCES [dbo].[GiftCert] ([Id])
GO
ALTER TABLE [dbo].[GcOutlet] CHECK CONSTRAINT [FK_GcOutlet_GiftCert]
GO
ALTER TABLE [dbo].[GcOutlet]  WITH CHECK ADD  CONSTRAINT [FK_GcOutlet_Outlet] FOREIGN KEY([OutletId])
REFERENCES [dbo].[Outlet] ([Id])
GO
ALTER TABLE [dbo].[GcOutlet] CHECK CONSTRAINT [FK_GcOutlet_Outlet]
GO
ALTER TABLE [dbo].[GcPurchase]  WITH CHECK ADD  CONSTRAINT [FK_GcPurchase_GiftCert] FOREIGN KEY([GiftCertId])
REFERENCES [dbo].[GiftCert] ([Id])
GO
ALTER TABLE [dbo].[GcPurchase] CHECK CONSTRAINT [FK_GcPurchase_GiftCert]
GO
ALTER TABLE [dbo].[GcRedemption]  WITH CHECK ADD  CONSTRAINT [FK_GcRedemption_GiftCert] FOREIGN KEY([GiftCertId])
REFERENCES [dbo].[GiftCert] ([Id])
GO
ALTER TABLE [dbo].[GcRedemption] CHECK CONSTRAINT [FK_GcRedemption_GiftCert]
GO
ALTER TABLE [dbo].[GcServicesType]  WITH CHECK ADD  CONSTRAINT [FK_GcServicesType_GiftCert] FOREIGN KEY([GiftCertId])
REFERENCES [dbo].[GiftCert] ([Id])
GO
ALTER TABLE [dbo].[GcServicesType] CHECK CONSTRAINT [FK_GcServicesType_GiftCert]
GO
ALTER TABLE [dbo].[GcServicesType]  WITH CHECK ADD  CONSTRAINT [FK_GcServicesType_ServicesType] FOREIGN KEY([ServicesTypeId])
REFERENCES [dbo].[ServicesType] ([Id])
GO
ALTER TABLE [dbo].[GcServicesType] CHECK CONSTRAINT [FK_GcServicesType_ServicesType]
GO
ALTER TABLE [dbo].[GiftCert]  WITH CHECK ADD  CONSTRAINT [FK_GiftCert_GcType] FOREIGN KEY([GcTypeId])
REFERENCES [dbo].[GcType] ([Id])
GO
ALTER TABLE [dbo].[GiftCert] CHECK CONSTRAINT [FK_GiftCert_GcType]
GO

using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GiftCertApp.Models
{
    public partial class MarcoPoloGCDBContext : DbContext
    {
        public virtual DbSet<Gcoutlet> Gcoutlet { get; set; }
        public virtual DbSet<Gcpurchase> Gcpurchase { get; set; }
        public virtual DbSet<Gcredemption> Gcredemption { get; set; }
        public virtual DbSet<GcservicesType> GcservicesType { get; set; }
        public virtual DbSet<Gctype> Gctype { get; set; }
        public virtual DbSet<GiftCertificate> GiftCertificate { get; set; }
        public virtual DbSet<Outlet> Outlet { get; set; }
        public virtual DbSet<ServicesType> ServicesType { get; set; }

        public MarcoPoloGCDBContext(DbContextOptions<MarcoPoloGCDBContext> options)
                : base(options)
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Gcoutlet>(entity =>
            {
                entity.ToTable("GCOutlet");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.GiftCertId).HasColumnName("GiftCertID");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.OutletId).HasColumnName("OutletID");

                entity.HasOne(d => d.GiftCert)
                    .WithMany(p => p.Gcoutlet)
                    .HasForeignKey(d => d.GiftCertId)
                    .HasConstraintName("FK_GCOutlet_GiftCertificate");

                entity.HasOne(d => d.Outlet)
                    .WithMany(p => p.Gcoutlet)
                    .HasForeignKey(d => d.OutletId)
                    .HasConstraintName("FK_GCOutlet_Outlet");
            });

            modelBuilder.Entity<Gcpurchase>(entity =>
            {
                entity.ToTable("GCPurchase");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CardType)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Ccnumber)
                    .HasColumnName("CCNumber")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ExpirationDate).HasColumnType("date");

                entity.Property(e => e.GiftCertId).HasColumnName("GiftCertID");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.PaymentMode)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PurchaseDate).HasColumnType("datetime");

                entity.Property(e => e.Remarks)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.GiftCert)
                    .WithMany(p => p.Gcpurchase)
                    .HasForeignKey(d => d.GiftCertId)
                    .HasConstraintName("FK_GCPurchase_GiftCertificate");
            });

            modelBuilder.Entity<Gcredemption>(entity =>
            {
                entity.ToTable("GCRedemption");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.GiftCertId).HasColumnName("GiftCertID");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RedemptionDate).HasColumnType("datetime");

                entity.Property(e => e.Remarks)
                    .HasMaxLength(250)
                    .IsUnicode(false);

                entity.HasOne(d => d.GiftCert)
                    .WithMany(p => p.Gcredemption)
                    .HasForeignKey(d => d.GiftCertId)
                    .HasConstraintName("FK_GCRedemption_GiftCertificate");
            });

            modelBuilder.Entity<GcservicesType>(entity =>
            {
                entity.ToTable("GCServicesType");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.GiftCertId).HasColumnName("GiftCertID");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.ServicesTypeId).HasColumnName("ServicesTypeID");

                entity.HasOne(d => d.GiftCert)
                    .WithMany(p => p.GcservicesType)
                    .HasForeignKey(d => d.GiftCertId)
                    .HasConstraintName("FK_GCServicesType_GiftCertificate");

                entity.HasOne(d => d.ServicesType)
                    .WithMany(p => p.GcservicesType)
                    .HasForeignKey(d => d.ServicesTypeId)
                    .HasConstraintName("FK_GCServicesType_ServicesType");
            });

            modelBuilder.Entity<Gctype>(entity =>
            {
                entity.ToTable("GCType");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<GiftCertificate>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DtipermitNo)
                    .HasColumnName("DTIPermitNo")
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ExpirationDate).HasColumnType("datetime");

                entity.Property(e => e.GctypeId).HasColumnName("GCTypeID");

                entity.Property(e => e.GiftCertNo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.IssuanceDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Note).HasColumnType("text");

                entity.Property(e => e.Qrcode)
                    .HasColumnName("QRCode")
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Value).HasColumnType("decimal(9, 2)");

                entity.HasOne(d => d.Gctype)
                    .WithMany(p => p.GiftCertificate)
                    .HasForeignKey(d => d.GctypeId)
                    .HasConstraintName("FK_GiftCertificate_GCType");
            });

            modelBuilder.Entity<Outlet>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .HasMaxLength(150)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<ServicesType>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name).IsUnicode(false);
            });
        }
    }
}

using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace GiftCertApp.Models
{
    public partial class MarcoPoloGCDBContext : DbContext
    {
        public virtual DbSet<GcOutlet> GcOutlet { get; set; }
        public virtual DbSet<GcPurchase> GcPurchase { get; set; }
        public virtual DbSet<GcRedemption> GcRedemption { get; set; }
        public virtual DbSet<GcServicesType> GcServicesType { get; set; }
        public virtual DbSet<GcType> GcType { get; set; }
        public virtual DbSet<GiftCert> GiftCert { get; set; }
        public virtual DbSet<Outlet> Outlet { get; set; }
        public virtual DbSet<ServicesType> ServicesType { get; set; }

        public MarcoPoloGCDBContext(DbContextOptions<MarcoPoloGCDBContext> options)
          : base(options)
            { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<GcOutlet>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.GiftCert)
                    .WithMany(p => p.GcOutlet)
                    .HasForeignKey(d => d.GiftCertId)
                    .HasConstraintName("FK_GcOutlet_GiftCert");

                entity.HasOne(d => d.Outlet)
                    .WithMany(p => p.GcOutlet)
                    .HasForeignKey(d => d.OutletId)
                    .HasConstraintName("FK_GcOutlet_Outlet");
            });

            modelBuilder.Entity<GcPurchase>(entity =>
            {
                entity.Property(e => e.CardType)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CcNumber)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.ExpirationDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.PaymentMode)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.PurchaseDate).HasColumnType("datetime");

                entity.Property(e => e.Remarks).HasColumnType("text");

                entity.HasOne(d => d.GiftCert)
                    .WithMany(p => p.GcPurchase)
                    .HasForeignKey(d => d.GiftCertId)
                    .HasConstraintName("FK_GcPurchase_GiftCert");
            });

            modelBuilder.Entity<GcRedemption>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.RedemptionDate).HasColumnType("datetime");

                entity.Property(e => e.Remarks).HasColumnType("text");

                entity.HasOne(d => d.GiftCert)
                    .WithMany(p => p.GcRedemption)
                    .HasForeignKey(d => d.GiftCertId)
                    .HasConstraintName("FK_GcRedemption_GiftCert");
            });

            modelBuilder.Entity<GcServicesType>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.HasOne(d => d.GiftCert)
                    .WithMany(p => p.GcServicesType)
                    .HasForeignKey(d => d.GiftCertId)
                    .HasConstraintName("FK_GcServicesType_GiftCert");

                entity.HasOne(d => d.ServicesType)
                    .WithMany(p => p.GcServicesType)
                    .HasForeignKey(d => d.ServicesTypeId)
                    .HasConstraintName("FK_GcServicesType_ServicesType");
            });

            modelBuilder.Entity<GcType>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<GiftCert>(entity =>
            {
                entity.Property(e => e.CreatedDate).HasColumnType("datetime");

                entity.Property(e => e.DtiPermitNo)
                    .HasMaxLength(150)
                    .IsUnicode(false);

                entity.Property(e => e.ExpirationDate).HasColumnType("datetime");

                entity.Property(e => e.GiftCertNo)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.IssuanceDate).HasColumnType("datetime");

                entity.Property(e => e.LastModifiedBy)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.ModifiedDate).HasColumnType("datetime");

                entity.Property(e => e.Note).HasColumnType("text");

                entity.Property(e => e.QrCode)
                    .HasMaxLength(25)
                    .IsUnicode(false);

                entity.Property(e => e.Value).HasColumnType("decimal(9, 2)");

                entity.HasOne(d => d.GcType)
                    .WithMany(p => p.GiftCert)
                    .HasForeignKey(d => d.GcTypeId)
                    .HasConstraintName("FK_GiftCert_GcType");
            });

            modelBuilder.Entity<Outlet>(entity =>
            {
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

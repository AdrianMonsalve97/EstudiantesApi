using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Estudiantes.API.Migrations
{
    /// <inheritdoc />
    public partial class Migrandofinal : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Cursos_Materias_MateriaId",
                table: "Cursos");

            migrationBuilder.DropIndex(
                name: "IX_Cursos_MateriaId",
                table: "Cursos");

            migrationBuilder.DropColumn(
                name: "MateriaId",
                table: "Cursos");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MateriaId",
                table: "Cursos",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Cursos_MateriaId",
                table: "Cursos",
                column: "MateriaId");

            migrationBuilder.AddForeignKey(
                name: "FK_Cursos_Materias_MateriaId",
                table: "Cursos",
                column: "MateriaId",
                principalTable: "Materias",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}

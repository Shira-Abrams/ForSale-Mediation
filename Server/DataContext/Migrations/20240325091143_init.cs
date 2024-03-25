using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DataContext.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NumOfSailingProperty = table.Column<int>(type: "int", nullable: false),
                    SumPriceForSaling = table.Column<double>(type: "float", nullable: false),
                    SumPriceForRenting = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Properties",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CityId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    PropertyStatus = table.Column<int>(type: "int", nullable: false),
                    OfferingStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Xcordinate = table.Column<double>(type: "float", nullable: true),
                    Ycordinate = table.Column<double>(type: "float", nullable: true),
                    Sm = table.Column<double>(type: "float", nullable: false),
                    Parkinglot = table.Column<bool>(type: "bit", nullable: false),
                    Elivator = table.Column<bool>(type: "bit", nullable: false),
                    Aircondition = table.Column<bool>(type: "bit", nullable: false),
                    Basmsent = table.Column<bool>(type: "bit", nullable: false),
                    SafeRoom = table.Column<bool>(type: "bit", nullable: false),
                    DisabledAcces = table.Column<bool>(type: "bit", nullable: false),
                    Bars = table.Column<bool>(type: "bit", nullable: false),
                    PandorDoor = table.Column<bool>(type: "bit", nullable: false),
                    PorchGarden = table.Column<bool>(type: "bit", nullable: false),
                    PropertyType = table.Column<int>(type: "int", nullable: false),
                    PropertyPrice = table.Column<double>(type: "float", nullable: false),
                    PropertyCondition = table.Column<int>(type: "int", nullable: false),
                    PriceForSm = table.Column<double>(type: "float", nullable: false),
                    Floor = table.Column<int>(type: "int", nullable: false),
                    AllFloor = table.Column<int>(type: "int", nullable: false),
                    NumRoom = table.Column<int>(type: "int", nullable: false),
                    NumBlock = table.Column<int>(type: "int", nullable: false),
                    NumEvenue = table.Column<int>(type: "int", nullable: false),
                    EntrcyDate = table.Column<int>(type: "int", nullable: false),
                    BuildingYear = table.Column<int>(type: "int", nullable: false),
                    PropertyDesctiption = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Furniture = table.Column<int>(type: "int", nullable: false),
                    IsCommercial = table.Column<bool>(type: "bit", nullable: false),
                    ImageUrlList = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Properties", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Properties_Cities_CityId",
                        column: x => x.CityId,
                        principalTable: "Cities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Properties_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SearchingPropetries",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    PropertyStatus = table.Column<int>(type: "int", nullable: false),
                    Parkinglot = table.Column<bool>(type: "bit", nullable: false),
                    Elivator = table.Column<bool>(type: "bit", nullable: false),
                    Aircondition = table.Column<bool>(type: "bit", nullable: false),
                    Basmsent = table.Column<bool>(type: "bit", nullable: false),
                    SafeRoom = table.Column<bool>(type: "bit", nullable: false),
                    DisabledAcces = table.Column<bool>(type: "bit", nullable: false),
                    Bars = table.Column<bool>(type: "bit", nullable: false),
                    PandorDoor = table.Column<bool>(type: "bit", nullable: false),
                    PorchGarden = table.Column<bool>(type: "bit", nullable: false),
                    Status = table.Column<int>(type: "int", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Xcordinate = table.Column<double>(type: "float", nullable: false),
                    Ycordinate = table.Column<double>(type: "float", nullable: false),
                    PriceBegin = table.Column<double>(type: "float", nullable: false),
                    PriceEnd = table.Column<double>(type: "float", nullable: false),
                    PriceForSmBegin = table.Column<double>(type: "float", nullable: false),
                    PriceForSmEnd = table.Column<double>(type: "float", nullable: false),
                    Rooms = table.Column<int>(type: "int", nullable: false),
                    SmBegin = table.Column<double>(type: "float", nullable: false),
                    SmEnd = table.Column<double>(type: "float", nullable: false),
                    PropertyCondtion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PropertyTypes = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FloorBegin = table.Column<int>(type: "int", nullable: false),
                    FloorEnd = table.Column<int>(type: "int", nullable: false),
                    IsCommercial = table.Column<bool>(type: "bit", nullable: false),
                    Furniture = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SearchingPropetries", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SearchingPropetries_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Properties_CityId",
                table: "Properties",
                column: "CityId");

            migrationBuilder.CreateIndex(
                name: "IX_Properties_UserId",
                table: "Properties",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SearchingPropetries_UserId",
                table: "SearchingPropetries",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Properties");

            migrationBuilder.DropTable(
                name: "SearchingPropetries");

            migrationBuilder.DropTable(
                name: "Cities");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/EmployeeeApplication.Web.Host/EmployeeeApplication.Web.Host.csproj", "src/EmployeeeApplication.Web.Host/"]
COPY ["src/EmployeeeApplication.Web.Core/EmployeeeApplication.Web.Core.csproj", "src/EmployeeeApplication.Web.Core/"]
COPY ["src/EmployeeeApplication.Application/EmployeeeApplication.Application.csproj", "src/EmployeeeApplication.Application/"]
COPY ["src/EmployeeeApplication.Core/EmployeeeApplication.Core.csproj", "src/EmployeeeApplication.Core/"]
COPY ["src/EmployeeeApplication.EntityFrameworkCore/EmployeeeApplication.EntityFrameworkCore.csproj", "src/EmployeeeApplication.EntityFrameworkCore/"]
WORKDIR "/src/src/EmployeeeApplication.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/EmployeeeApplication.Web.Host", "src/EmployeeeApplication.Web.Host"]
COPY ["src/EmployeeeApplication.Web.Core", "src/EmployeeeApplication.Web.Core"]
COPY ["src/EmployeeeApplication.Application", "src/EmployeeeApplication.Application"]
COPY ["src/EmployeeeApplication.Core", "src/EmployeeeApplication.Core"]
COPY ["src/EmployeeeApplication.EntityFrameworkCore", "src/EmployeeeApplication.EntityFrameworkCore"]
WORKDIR "/src/src/EmployeeeApplication.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "EmployeeeApplication.Web.Host.dll"]

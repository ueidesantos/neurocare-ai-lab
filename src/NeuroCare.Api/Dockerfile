# Use the .NET 10 SDK image for building
FROM mcr.microsoft.com/dotnet/sdk:10.0-preview AS build
WORKDIR /app

# Copy solution and project files and restore as distinct layers
COPY neurocare-ai-lab.slnx ./
COPY src/NeuroCare.Domain/*.csproj src/NeuroCare.Domain/
COPY src/NeuroCare.Application/*.csproj src/NeuroCare.Application/
COPY src/NeuroCare.Infrastructure/*.csproj src/NeuroCare.Infrastructure/
COPY src/NeuroCare.Api/*.csproj src/NeuroCare.Api/
RUN dotnet restore src/NeuroCare.Api/NeuroCare.Api.csproj

# Copy everything else and build the app
COPY . .
WORKDIR /app/src/NeuroCare.Api
RUN dotnet publish -c Release -o out

# Final stage/image
FROM mcr.microsoft.com/dotnet/aspnet:10.0-preview
WORKDIR /app
COPY --from=build /app/src/NeuroCare.Api/out .
ENTRYPOINT ["dotnet", "NeuroCare.Api.dll"]

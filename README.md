# Sportradar Coding Academy Coding Exercise (BE)

## Download and Setup

> **Note**: This project uses Docker for containerization. To get Docker, visit [Docker Documentation](https://docs.docker.com/get-started/get-docker/).

1. Clone this repository

```bash
git clone https://github.com/MrPaschenko/sportradar
```

2. Navigate to the `sportradar` directory

```bash
cd sportradar
```

3. Build and start the Docker containers

```bash
docker-compose up --build
```

4. Use

- Simple frontend .html file is located at `./frontend/index.html`. Open it in browser.
- Open API documentation is available at http://localhost:8000/api (Swagger UI).

## Tech Stack

Backend:
- [Node.js](https://nodejs.org/en)
- [TypeScript](https://www.typescriptlang.org)
- [NestJS](https://nestjs.com)
- [Drizzle ORM](https://orm.drizzle.team)

Database:
- [PostgreSQL](https://www.postgresql.org)

Frontend:
- [HTML](https://en.wikipedia.org/wiki/HTML)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

Containerization:
- [Docker](https://www.docker.com)

Development Tools:
- [JetBrains WebStorm](https://www.jetbrains.com/webstorm/)
- [RapidAPI](https://paw.cloud)
- [TablePlus](https://tableplus.com)
- [dbdiagram.io](https://dbdiagram.io/home)

## Database Modeling Overview

To store sport events, I have identified the following entities:
- `Events`: Main table to store sports events
  - `id` of type `uuid`: Primary key
  - `start_time` of type `time`: Time when the event starts
  - `start_date` of type `date`: Date when the event starts
  - `sport_id` of type `uuid`: Foreign key referencing `Sports` table
  - `home_team_id` of type `uuid`: Foreign key referencing `Teams` table
  - `guest_team_id` of type `uuid`: Foreign key referencing `Teams` table
  - `venue_id` of type `uuid`: Foreign key referencing `Venues` table
  - `status` of type `smallint`: Status of the event 
    - `0`: Scheduled
    - `1`: In Progress
    - `2`: Completed
    - `3`: Canceled
  - `home_score` of type `int`: Score of the home team
  - `guest_score` of type `int`: Score of the guest team
- `Sports`: Table to store sports information
  - `id` of type `uuid`: Primary key
  - `name` of type `text`: Name of the sport
  - `description` of type `text`: Description of the sport
- `Venues`: Table to store venues information
  - `id` of type `uuid`: Primary key
  - `name` of type `text`: Name of the venue
  - `city` of type `text`: City where the venue is located
  - `country` of type `text`: Country where the venue is located
  - `longitude` of type `float`: Longitude of the venue
  - `latitude` of type `float`: Latitude of the venue
  - `website_url` of type `text`: Website URL of the venue
- `Teams`: Table to store teams information
  - `id` of type `uuid`: Primary key
  - `name` of type `text`: Name of the team
  - `short_name` of type `text`: Short name of the team
  - `city` of type `text`: City where the team is based
  - `country` of type `text`: Country where the team is based
  - `sport_id` of type `uuid`: Foreign key referencing `Sports` table
  - `website_url` of type `text`: Website URL of the team
  - `logo_url` of type `text`: Logo URL of the team

### Entity-Relationship Diagram (ERD)

I have created an ERD that includes all the tables, their fields, and relationships. 
ERD also follows the third normal form of database normalization.

URL: https://dbdiagram.io/d/Sportradar-69037e8c6735e1117084dca3

iframe code:

<iframe width="560" height="315" src='https://dbdiagram.io/e/69037e8c6735e1117084dca3/690a07916735e1117030a653'> </iframe>

image:

![https://i.imgur.com/PXRRt88.png](https://i.imgur.com/PXRRt88.png)


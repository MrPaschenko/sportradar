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

3. Copy `.env.example` to `.env` and adjust environment variables if needed

```bash
cp ./backend/.env.example ./backend/.env
```

4. Build and start the Docker containers

```bash
docker-compose up --build
```

5. Use

- Simple frontend .html file is located at `./frontend/index.html`. Open it in browser.
- Open API documentation is available at http://localhost:8000/api (Swagger UI).

## Tech Stack Overview

I have chosen the following technologies as I have already worked with most of them during my studies in university.

While I did not specifically work with NestJS and Drizzle ORM before, some of my friends recommended them to me previously, so I decided to give them a try for this project.

I mostly followed official documentations of NestJS and Drizzle ORM to solve the task, but I have also used some blog posts, YouTube videos, and LLMs to help me understand certain concepts better.

More about my use of LLMs can be found in the [AI_Reflection.txt](./AI_Reflection.txt) file.

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
  - `_sport_id` of type `uuid`: Foreign key referencing `Sports` table
  - `_home_team_id` of type `uuid`: Foreign key referencing `Teams` table
  - `_guest_team_id` of type `uuid`: Foreign key referencing `Teams` table
  - `_venue_id` of type `uuid`: Foreign key referencing `Venues` table
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
  - `_sport_id` of type `uuid`: Foreign key referencing `Sports` table
  - `website_url` of type `text`: Website URL of the team
  - `logo_url` of type `text`: Logo URL of the team

### Entity-Relationship Diagram (ERD)

I have created an ERD that includes all the tables, their fields, and relationships. 
ERD also follows the third normal form of database normalization.

[<img src="https://i.imgur.com/ClOfJSX.png">](https://dbdiagram.io/d/Sportradar-69037e8c6735e1117084dca3)

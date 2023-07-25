# 🌻 Plants API 🌻

## Introduction

Welcome to my Plants API!

## How to Use

## Data Model

### Family Schema

| Field       | Type   | Description                                                                       |
| ----------- | ------ | --------------------------------------------------------------------------------- |
| familyName  | String | The name of the family                                                            |
| derivation  | String | The derivation of the family name, typically greek or latin, or named by a person |
| meaning     | String | The meaning of the family name                                                    |
| orderName   | String | The name of the order (1 tier higher than family)                                 |
| uses        | Array  | An array of uses plants in the family possess                                     |
| description | String | A description of plants within the family                                         |
| genera      | Array  | An array of genera within the family (plural for genus and 1 tier below family)   |

### Genus Schema

| Field       | Type   | Description                                               |
| ----------- | ------ | --------------------------------------------------------- |
| genusName   | String | The name of the genus                                     |
| familyName  | String | The name of the family                                    |
| description | String | A descrition of plants within the genus                   |
| species     | Array  | An array of species within the genus (1 tier below genus) |

### Species Schema

| Field       | Type   | Description                                                            |
| ----------- | ------ | ---------------------------------------------------------------------- |
| speciesName | String | The name of the species                                                |
| commonName  | String | The non-scientific name of the species (some species may not have one) |
| genusName   | String | The name of the genus                                                  |
| image       | String | A link to an image of the species                                      |

## CRUD Functionality

### GET Endpoints

#### Families

- **_/api/families_** - Returns a list of all families
- **_/api/families/:familyName_** - Returns a family by familyName (first letter is not case sensitive and can be entered either uppercase or lowercase)
- **_/api/families/id/:id_** - Returns a family by id

#### Genera

- **_/api/genera_** - Returns a list of all genera
- **_/api/genera/:genusName_** - Returns a genus by genusName (first letter is not case sensitive and can be entered either uppercase or lowercase)
- **_/api/genera/id/:id_** - Returns a genus by id

#### Species

- **_/api/species_** - Returns a list of all species
- **_/api/species/:speciesName_** - Returns a species by speciesName (first letter is not case sensitive and can be entered either uppercase or lowercase)
- **_/api/species/common-name/:commonName_** - Returns a species by commonName
- **_/api/species/id/:id_** - Returns a species by id

## Installation

## Resources

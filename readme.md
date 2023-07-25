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

## Installation

## Resources

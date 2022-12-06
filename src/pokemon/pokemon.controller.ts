import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';


@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Post()
  //@HttpCode( HttpStatus.UNAUTHORIZED)
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Get(':tern')
  findOne(@Param('tern') tern: string) {
    return this.pokemonService.findOne( tern );
  }

  @Patch(':tern')
  update(@Param('tern') tern: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonService.update( tern, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseMongoIdPipe ) id: string) {
    return this.pokemonService.remove( id );
  }
}

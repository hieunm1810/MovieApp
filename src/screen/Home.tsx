import React, {memo, useCallback, useEffect, useMemo, useState} from 'react'
import {Text, View} from 'react-native'
import axios from 'axios'
import {getPopularMovies} from '../api/movieAPI'
import {SliderBox} from 'react-native-image-slider-box'
type Movie = {
  original_title?: string
  original_language?: string
  release_date?: string
}

const images = [
  'https://source.unsplash.com/1024x768/?nature',
  'https://source.unsplash.com/1024x768/?water',
  'https://source.unsplash.com/1024x768/?girl',
  'https://source.unsplash.com/1024x768/?tree',
]

const Home = () => {
  const [movie, setMovie] = useState<Movie>()
  const [error, setError] = useState<boolean>(false)

  const handleGetPopularMovies = useCallback(() => {
    getPopularMovies()
      .then(movies => {
        setMovie(movies[0])
      })
      .catch(err => setError(err))
  }, [])
  useEffect(() => {
    handleGetPopularMovies()
  }, [])
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Movie name: {movie?.original_title}</Text>
      <Text>Language: {movie?.original_language}</Text>
      <Text>Release date: {movie?.release_date}</Text>
      {error && <Text style={{color: 'red'}}>error in the server</Text>}
      {/* <SliderBox images={images} /> */}
    </View>
  )
}

export default memo(Home)

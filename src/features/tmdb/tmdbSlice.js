import { createSlice } from '@reduxjs/toolkit';
import {
  AiOutlineFire,
  AiOutlineCalendar,
  AiOutlineHeart,
} from 'react-icons/ai';
import { BsHandThumbsUp, BsClock, BsPatchQuestion } from 'react-icons/bs';
import {
  GiFist,
  GiCrimeSceneTape,
  GiFilmStrip,
  GiUfo,
  GiDrippingKnife,
  GiFireBomb,
  GiWesternHat,
} from 'react-icons/gi';
import {
  FaPiedPiperHat,
  FaRegLaughSquint,
  FaTheaterMasks,
} from 'react-icons/fa';
import { RiMickeyLine, RiGhost2Line } from 'react-icons/ri';
import { TbBuildingCastle } from 'react-icons/tb';
import { SlMusicToneAlt } from 'react-icons/sl';
import { MdOutlineMovieFilter, MdPeopleOutline } from 'react-icons/md';

const initialState = {
  categoryOrGenreName: 'popular',
  searchTerm: '',
  page: 1,

  categories: [
    { id: 1, name: 'Popular', value: 'popular', icon: <AiOutlineFire /> },
    { id: 2, name: 'Top Rated', value: 'top_rated', icon: <BsHandThumbsUp /> },
    { id: 3, name: 'Upcoming', value: 'upcoming', icon: <AiOutlineCalendar /> },
  ],

  genres: [
    { id: 28, name: 'Action', icon: <GiFist /> },
    { id: 12, name: 'Adventure', icon: <FaPiedPiperHat /> },
    { id: 16, name: 'Animation', icon: <RiMickeyLine /> },
    { id: 35, name: 'Comedy', icon: <FaRegLaughSquint /> },
    { id: 80, name: 'Crime', icon: <GiCrimeSceneTape /> },
    { id: 99, name: 'Documentary', icon: <GiFilmStrip /> },
    { id: 18, name: 'Drama', icon: <FaTheaterMasks /> },
    { id: 10751, name: 'Family', icon: <MdPeopleOutline /> },
    { id: 14, name: 'Fantasy', icon: <TbBuildingCastle /> },
    { id: 36, name: 'History', icon: <BsClock /> },
    { id: 27, name: 'Horror', icon: <RiGhost2Line /> },
    { id: 10402, name: 'Music', icon: <SlMusicToneAlt /> },
    { id: 9648, name: 'Mystery', icon: <BsPatchQuestion /> },
    { id: 10749, name: 'Romance', icon: <AiOutlineHeart /> },
    { id: 878, name: 'Science Fiction', icon: <GiUfo /> },
    { id: 10770, name: 'TV Movie', icon: <MdOutlineMovieFilter /> },
    { id: 53, name: 'Thriller', icon: <GiDrippingKnife /> },
    { id: 10752, name: 'War', icon: <GiFireBomb /> },
    { id: 37, name: 'Western', icon: <GiWesternHat /> },
  ],
};

export const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {
    selectCategoryOrGenre: (state, action) => {
      state.categoryOrGenreName = action.payload;
      state.searchTerm = '';
    },

    searchMovie: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { selectCategoryOrGenre, searchMovie } = tmdbSlice.actions;
export default tmdbSlice.reducer;

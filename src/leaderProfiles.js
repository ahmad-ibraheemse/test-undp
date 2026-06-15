import leaderImg1 from './assets/Landing-imgs/section6/img1.png'
import leaderImg2 from './assets/Landing-imgs/section6/img2.png'
import leaderImg3 from './assets/Landing-imgs/section6/img3.png'
import leaderImg4 from './assets/Landing-imgs/section6/img4.png'
import leaderImg5 from './assets/Landing-imgs/section6/img5.png'
import leaderImg6 from './assets/Landing-imgs/section6/img6.png'
import leaderImg7 from './assets/Landing-imgs/section6/img7.png'
import leaderImg8 from './assets/Landing-imgs/section6/img8.png'
import leaderImg9 from './assets/Landing-imgs/section6/img9.png'
import leaderImg10 from './assets/Landing-imgs/section6/img10.png'
import leaderImg11 from './assets/Landing-imgs/section6/img11.png'
import leaderImg12 from './assets/Landing-imgs/section6/img12.png'
import leaderImg13 from './assets/Landing-imgs/section6/img13.png'
import leaderImg14 from './assets/Landing-imgs/section6/img14.png'
import { STORY_PATHS } from './storyPaths.js'

const profileMeta = {
  raghda: {
    alt: 'Raghda Hassan profile card',
    ariaLabel: "Open Raghda Hassan's story",
    storyPath: STORY_PATHS.raghda,
  },

}

const createProfile = (src, index, meta = {}) => ({
  src,
  alt: meta.alt ?? `Profile card for young leader ${index + 1}`,
  ariaLabel: meta.ariaLabel ?? null,
  storyPath: meta.storyPath ?? null,
})

export const leaderProfiles = [
  createProfile(leaderImg1, 0),
  createProfile(leaderImg2, 1),
  createProfile(leaderImg3, 2),
  createProfile(leaderImg4, 3),
  createProfile(leaderImg5, 4),
  createProfile(leaderImg6, 5,),
  createProfile(leaderImg7, 6),
  createProfile(leaderImg8, 7, profileMeta.raghda),
  createProfile(leaderImg9, 8),
  createProfile(leaderImg10, 9),
  createProfile(leaderImg11, 10),
  createProfile(leaderImg12, 11),
  createProfile(leaderImg13, 12),
  createProfile(leaderImg14, 13),
]

export const storyLeaderProfiles = [
  leaderProfiles[1],
  leaderProfiles[0],
  ...leaderProfiles.slice(2),
]

export const leaderProfileImages = leaderProfiles.map(({ src }) => src)

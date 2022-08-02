import Typography from '../typography'
// import CountUp from 'react-countup'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import AnimatingNumber from 'components/numbrr/animatethatnumberbabe'
import { PADDINGX } from 'constants/layout'


const Info = ({data}) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  return (
    <div className={`w-full ${PADDINGX}`}>
      <div className="flex flex-col items-center  md:flex-row max-w-shambWidth mx-auto md:gap-20 pt-36">
        {data.list.map((el, i) => {
          return (
            <div className="bg-components-30 h-[200px] md:h-[283px] gap-y-3.5 w-[365px] flex flex-col justify-center  items-center rounded-[8px] md:bg-too" key={i}>
              <Typography variant="h2" className="hidden md:block text-white">
                <AnimatingNumber value={el.num} suffix={el.suf} />
              </Typography>
              <Typography variant="h4" className="md:hidden text-white">
                <AnimatingNumber value={el.num} suffix={el.suf} />
              </Typography>
              <Typography variant={matches ? 'p-small' : 'title-small'} className="text-white opacity-50">
                {el.text}
              </Typography>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Info

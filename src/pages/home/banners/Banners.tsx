import { useState } from 'react'
import { IconButton, MobileStepper, Paper, Typography, useTheme } from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { BannerProps } from '@pages/home/banners/types'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Banners = ({ banners, onBannerClick }: BannerProps) => {
  banners = banners.filter((it) => it.type === 1)
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = banners.length

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 < 0 ? maxSteps - 1 : prevActiveStep - 1))
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }

  return (
    <div>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={3000}
      >
        {banners.map((banner, index) => (
          <div key={banner.out_uuid}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Paper
                square
                elevation={0}
                onClick={() => onBannerClick(banner)}
                className="bg-paper relative flex aspect-[60/29] cursor-pointer items-center justify-center"
              >
                <img src={banner.cover} alt={banner.brief} className="block h-full w-full max-w-full overflow-hidden" />
                <Typography
                  variant="body2"
                  className="absolute bottom-0 w-full bg-black bg-opacity-50 px-3 py-1 text-white"
                >
                  {banner.brief}
                </Typography>
              </Paper>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <IconButton onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
        }
        backButton={
          <IconButton onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
        }
      />
    </div>
  )
}

export default Banners

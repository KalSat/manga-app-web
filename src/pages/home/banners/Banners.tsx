import { useState } from 'react'
import { IconButton, MobileStepper, Paper, Typography, useTheme } from '@mui/material'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { BannerProps } from '@pages/home/banners/types'
import { AutoPlaySwipeableViews } from '@pages/home/banners/AutoPlaySwipeableViews'

/**
 * `Banners` component displays a series of banners with auto-play functionality.
 *
 * This component uses `react-swipeable-views` for swipeable views and `react-swipeable-views-utils` for auto-play functionality.
 * It also utilizes Material-UI components for styling and layout.
 *
 * Props:
 * - `banners` (BannerProps[]): An array of banner objects to be displayed.
 * - `onBannerClick` (function): A callback function to handle banner click events.
 *
 * The component filters banners to only include those of type 1, and manages the active step state to control the current banner being displayed.
 *
 * The `AutoPlaySwipeableViews` component is used to enable auto-play functionality with a 3000ms interval.
 *
 * The `MobileStepper` component is used to provide navigation buttons for manually stepping through the banners.
 *
 * The `IconButton` components are used for the next and back buttons, displaying left and right arrows based on the theme direction.
 *
 * The `Typography` component is used to display the banner brief text, with styles applied for vertical centering and background opacity.
 *
 * The `Box` component is used to render the banner images, replacing the standard `img` tag.
 *
 * @component
 * @example
 * const banners = [
 *   { out_uuid: '1', type: 1, cover: 'image1.jpg', brief: 'Banner 1' },
 *   { out_uuid: '2', type: 1, cover: 'image2.jpg', brief: 'Banner 2' }
 * ];
 * const handleBannerClick = (banner) => console.log(banner);
 *
 * <Banners banners={banners} onBannerClick={handleBannerClick} />
 */
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
        interval={6000}
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
                <div className="absolute bottom-0 flex w-full flex-row flex-wrap items-baseline justify-end bg-black bg-opacity-50 px-3">
                  <Typography variant="body2" className="text-white">
                    {banner.brief}
                  </Typography>
                  <div className="flex-1" />
                  {banner.comic?.name && (
                    <Typography variant="caption" className="self-end text-white">
                      {`—— ${banner.comic?.name}`}
                    </Typography>
                  )}
                </div>
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
          <IconButton data-testid="next" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
        }
        backButton={
          <IconButton data-testid="back" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
        }
      />
    </div>
  )
}
export default Banners

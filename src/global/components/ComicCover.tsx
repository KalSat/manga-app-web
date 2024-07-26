import { Typography } from '@mui/material'
import { LocalFireDepartment } from '@mui/icons-material'
import { isEmpty } from 'lodash'
import { ComicSummary, NamePathPair } from '@data/model/comic'

export interface ComicCoverProps {
  comic: ComicSummary
  showPopular?: boolean
  onClick: (comic: NamePathPair) => void
}

/**
 * ComicCover component displays a comic cover with additional information.
 *
 * @component
 * @param {ComicCoverProps} props - The properties for the ComicCover component.
 * @param {ComicSummary} props.comic - The comic data to display.
 * @param {boolean} [props.showPopular=true] - Flag to show or hide the popularity indicator.
 * @param {function} props.onClick - Callback function to handle click events on the comic cover.
 */
const ComicCover = ({ comic, showPopular = true, onClick }: ComicCoverProps) => {
  return (
    <div className="flex flex-col items-stretch justify-start" onClick={() => onClick(comic)}>
      <div className="relative aspect-[328/422] overflow-hidden rounded">
        <div className="absolute flex h-full w-full items-center justify-center bg-gray-200 bg-opacity-50"></div>
        <img src={comic.cover} alt={comic.name} className="absolute h-full w-full object-cover" />
        <Typography
          className="absolute bottom-0 w-full bg-black bg-opacity-40 px-1 text-end text-[11px] leading-4 text-white"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '1',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {comic.author.map((author) => author.name).join('/')}
        </Typography>
      </div>
      <div className="mt-0.5 flex flex-row items-center justify-between px-0.5">
        {showPopular && (
          <div className="flex h-5 flex-row items-center">
            <LocalFireDepartment className="w-3.5 text-orange-500" />
            <Typography className="text-[10px] text-orange-500">{comic.popular}</Typography>
          </div>
        )}
        {!isEmpty(comic.datetime_updated) && (
          <Typography className="text-[10px] leading-5 text-gray-500">{comic.datetime_updated}</Typography>
        )}
      </div>
      <Typography
        variant="caption"
        className="mx-1 mb-0.5"
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
        }}
      >
        {comic.name}
      </Typography>
    </div>
  )
}
export default ComicCover

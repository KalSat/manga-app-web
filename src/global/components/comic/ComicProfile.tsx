import { LocalFireDepartment } from '@mui/icons-material'
import { Chip, Typography } from '@mui/material'
import { isEmpty } from 'lodash'
import { ComicSummary, NamePathPair } from '@data/model/comic'

export interface ComicProfileProps {
  comic: ComicSummary
  onComicClick: (comic: NamePathPair) => void
  onTagClick: (tag: NamePathPair) => void
}

/**
 * ### Prompt
 * ComicProfile组件和ComicCover组件类似是用于展示漫画简介，与ComicCover通常置于网格布局不同ComicProfile会置于纵向列表布局中。它会占满父组件宽度，左侧按图片比例显示漫画的封面图，右侧逐行显示漫画信息，包括漫画名，作者，热度与更新时间，hash主题标签
 */
const ComicProfile = ({ comic, onComicClick, onTagClick }: ComicProfileProps) => {
  return (
    <div className="flex w-full gap-4 px-4 py-2" onClick={() => onComicClick(comic)}>
      <div className="aspect-[328/422] flex-1 overflow-hidden rounded bg-gray-200 bg-opacity-50">
        <img src={comic.cover} alt={comic.name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-[3] flex-col justify-start gap-2">
        <Typography
          variant="subtitle1"
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {comic.name}
        </Typography>
        <Typography variant="body2" className="text-gray-600">
          {comic.author.map((author) => author.name).join(', ')}
        </Typography>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <LocalFireDepartment className="w-4 text-orange-500" />
            <Typography variant="body2" className="ml-1 text-orange-500">
              {Intl.NumberFormat('en-US', {
                notation: 'compact',
                maximumFractionDigits: 1,
              }).format(comic.popular)}
            </Typography>
          </div>
          {!isEmpty(comic.last_chapter_name) && (
            <Typography variant="body2" className="text-gray-500">
              {comic.last_chapter_name}
            </Typography>
          )}
          {!isEmpty(comic.datetime_updated) && (
            <Typography variant="body2" className="text-gray-500">
              {comic.datetime_updated}
            </Typography>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {comic.theme &&
            comic.theme.map((tag) => (
              <Chip
                key={tag.path_word}
                variant="outlined"
                size="small"
                icon={
                  <Typography className="ms-1.5 font-['monospace'] font-semibold italic" sx={{ color: 'inherit' }}>
                    #
                  </Typography>
                }
                label={tag.name}
                onClick={() => onTagClick(tag)}
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ComicProfile

import { BubbleComment } from "@components/Comments"
import COMMENT_CONSTANTS from "@constants/comments"
import useComments from "@hooks/useComments"
import { Comment } from "@services/Comment"
import { useState } from "react"

function FeatureComments({ featureId }) {
  const {
    isLoading,
    isError,
    comments,
    refetch,
    fetchNextPage,
    hasNextPage
  } = useComments(featureId, COMMENT_CONSTANTS.paginationLimit)

  const [newComment, setNewComment] = useState('')

  const handleNewCommentChange = (event) => {
    event.preventDefault()
    setNewComment(event.target.value)
  }

  const handleSendComment = async (event) => {
    event.preventDefault()
    await Comment.sendNewComment(newComment, featureId)
    setNewComment('')
    refetch()
  }

  if (isLoading) {
    return <p>Loading comments</p>
  }

  if (isError) {
    return <p>There was an error loading the comments</p>
  }

  return (
    < div className="py-2 px-4" >
      <div className="flex flex-col max-h-[60vh] gap-2 scrollbar-sm overflow-y-scroll lg:max-h-[50vh] pr-2">
        {
          comments?.length === 0 ? <p>No comments were found</p> :
            comments?.map((comment, index) => {
              return (
                <BubbleComment key={index} text={comment?.body} />
              )
            })
        }
        {
          hasNextPage ?
            <button
              className="bg-fg-green-400 hover:bg-fg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
              onClick={() => fetchNextPage()}
            >
              Load More comments
            </button>
            : <p className="italic text-right text-gray-400">No more comments to load</p>
        }
      </div>
      {
        <form className='flex flex-col lg:flex-row gap-2 w-full mt-2' >
          <input type="text" placeholder="Write a new comment" className='border-2 border-gray-300 rounded-md px-4 py-2 w-full' value={newComment} onChange={handleNewCommentChange} />
          <input type="submit" value='Comment' className='bg-fg-green-400 hover:bg-fg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer' onClick={handleSendComment} />
        </form>
      }
    </div >
  )
}
export default FeatureComments
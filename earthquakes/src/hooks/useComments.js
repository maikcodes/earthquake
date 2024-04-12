import { Comment } from "@services/Comment";
import { useInfiniteQuery } from "react-query";

const fetchComments = async (featureId, page, limit) => {
  const comments = await Comment.indexByFeatureId(featureId, page, limit);
  const currentPage = comments?.pagination?.current_page;
  const totalResults = comments?.pagination?.total;
  const totalPages = Math.ceil(totalResults / limit);

  let nextCursor;
  if (totalPages === currentPage) {
    nextCursor = null;
  } else {
    nextCursor = Number(comments.pagination.current_page) + 1;
  }

  return {
    comments: comments?.data,
    nextCursor,
  };
};

function useComments(id, limit) {
  const { isLoading, isError, data, refetch, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ["comments", id],
      async ({ pageParam }) => await fetchComments(id, pageParam, limit),
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );

  return {
    isLoading,
    isError,
    comments: data?.pages.flatMap((page) => page.comments) ?? [],
    refetch,
    fetchNextPage,
    hasNextPage,
  };
}

export default useComments;

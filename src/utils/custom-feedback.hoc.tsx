import { IComment } from "@/types/comment"
import { IBasetListPost } from "@/types/post"

export const customConditionalFeedbackHigh =
    (loadingFeedBack?: string, noDataFeedBack?: string, dataEmptyFeedback?: string) =>
        (Component: React.ComponentType<{ data: IBasetListPost }>) =>
            (props: any) => {
                if (props?.data?.isLoading) return <div>{loadingFeedBack || 'Loading...'}</div>
                if (!props?.data?.data) return <div>{noDataFeedBack || 'No data loaded yet'}</div>
                if (!props?.data?.data.length) return <div>{dataEmptyFeedback || 'Data is empty'}</div>
                return <Component {...props} />
            }

export const customConditionalCommentsFeedbackHigh =
    (noDataFeedBack?: string, dataEmptyFeedback?: string) =>
        (Component: React.ComponentType<{ data?: IComment[] }>) =>
            (props: any) => {
                if (!props?.data) return <div>{noDataFeedBack || 'No data loaded yet'}</div>
                if (!props?.data.length) return <div>{dataEmptyFeedback || 'Data is empty'}</div>
                return <Component {...props} />
            }
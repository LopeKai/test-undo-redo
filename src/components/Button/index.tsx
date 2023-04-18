interface buttonProps {
    title: string
    handleFunction?: () => void
    allCircles?: any[]
}

export const Button = ({ title, handleFunction, allCircles }: buttonProps) => {
    return (
        <button
            className={`${allCircles?.length === 0 && 'opacity-50 cursor-not-allowed'} w-40 h-10 rounded-md bg-blue-500 text-white text-base font-medium uppercase`}
            disabled={allCircles?.length === 0}
            onClick={handleFunction}
        >
            {title}
        </button>
    )
}
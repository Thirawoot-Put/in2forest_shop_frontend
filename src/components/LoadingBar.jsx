
function LoadingBar() {
    return (
        <>
            <div className="fixed inset-0 bg-black opacity-20 z-50"></div>
            <div className="fixed inset-0 z-50">
                <div className="flex items-center justify-center min-h-full">
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            </div>
        </>
    )
}

export default LoadingBar
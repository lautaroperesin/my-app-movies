export default function ReviewSection({ reviews }) {

    // Función para formatear la fecha
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
    }

    // Función para mostrar estrellas de calificación
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating / 2);
        const halfStar = rating % 2 >= 1;
        
        return (
            <div className="flex">
                {[...Array(5)].map((_, index) => (
                    <svg 
                        key={index} 
                        className={`w-5 h-5 ${
                            index < fullStars 
                                ? 'text-yellow-500' 
                                : (index === fullStars && halfStar) 
                                    ? 'text-yellow-500' 
                                    : 'text-gray-300'
                        }`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
        );
    }

    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">REVIEWS</h2>
            
            {reviews && reviews.length > 0 ? (
                <div className="space-y-6">
                    {reviews.map((review, index) => (
                        <div 
                            key={index} 
                            className="border-b pb-6 last:border-b-0"
                        >
                            <div className="flex items-center mb-4">
                                <div className="mr-4">
                                    {renderStars(review.author_details.rating || 0)}
                                </div>
                                <span className="text-gray-600 text-sm">
                                    {formatDate(review.created_at)}
                                </span>
                            </div>
                            
                            <div className="flex items-start mb-4">
                                {review.author_details.avatar_path ? (
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w45${review.author_details.avatar_path}`}
                                        alt={review.author}
                                        className="w-10 h-10 rounded-full mr-4"
                                    />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-4 flex items-center justify-center">
                                        <svg 
                                            className="w-6 h-6 text-gray-500" 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path 
                                                fillRule="evenodd" 
                                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                                                clipRule="evenodd" 
                                            />
                                        </svg>
                                    </div>
                                )}
                                
                                <div>
                                    <h3 className="font-semibold">{review.author}</h3>
                                    <p className="text-gray-600 text-sm">
                                        {review.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No reviews available</p>
            )}
        </div>
    );
}
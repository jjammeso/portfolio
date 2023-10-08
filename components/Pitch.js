export default function PitchVideo(){
    return (
        <div className="pitch">
          <video controls autoPlay >
            <source src="https://www.youtube.com/watch?v=SqcY0GlETPk" type="video/mp4" />
            {/* You can add additional <source> elements for different video formats (e.g., WebM, Ogg) */}
            Your browser does not support the video tag.
          </video>
        </div>
      );
}
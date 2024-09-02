import './videos.css'

const dummyData = [
  {
    image: 'https://via.placeholder.com/150x100.png?text=Video+1',
    title: 'Exploring the Mountains: A Travel Vlog',
    user: 'AdventureWithAlex',
    posted_date: '2024-08-15',
  },
  {
    image: 'https://via.placeholder.com/150x100.png?text=Video+2',
    title: 'Top 10 Tips for Learning JavaScript',
    user: 'CodeMaster',
    posted_date: '2024-08-22',
  },
  {
    image: 'https://via.placeholder.com/150x100.png?text=Video+3',
    title: "The Future of AI: What's Next?",
    user: 'TechTalk',
    posted_date: '2024-09-01',
  },
  {
    image: 'https://via.placeholder.com/150x100.png?text=Video+4',
    title: 'Delicious Homemade Pizza Recipe',
    user: 'CookingWithChris',
    posted_date: '2024-08-28',
  },
  {
    image: 'https://via.placeholder.com/150x100.png?text=Video+5',
    title: "Beginner's Guide to Yoga",
    user: 'WellnessGuru',
    posted_date: '2024-07-30',
  },
  {
    image: 'https://via.placeholder.com/150x100.png?text=Video+6',
    title: 'Understanding Quantum Computing',
    user: 'PhysicsPhenom',
    posted_date: '2024-09-02',
  },
  {
    image: 'https://via.placeholder.com/150x100.png?text=Video+7',
    title: 'Mastering the Art of Public Speaking',
    user: 'SpeakEasy',
    posted_date: '2024-08-10',
  },
  {
    image: 'https://via.placeholder.com/150x100.png?text=Video+8',
    title: 'Top 5 Workout Routines for Beginners',
    user: 'FitnessPro',
    posted_date: '2024-09-03',
  },
  {
    image: 'https://via.placeholder.com/150x100.png?text=Video+9',
    title: 'History of Ancient Civilizations',
    user: 'HistoryBuff',
    posted_date: '2024-08-05',
  },
]


const Video = () => {
    return ( <div className="videos">
        {
            dummyData.map((video, index) => {
                return (
                  <div className="video" key={index}>
                    <img src={video.image} alt={video.title} />
                    <div className="video-info">
                      <h3>{video.title}</h3>
                      <p className='user'>{video.user}</p>
                      <p className="date">{video.posted_date}</p>
                    </div>
                  </div>
                )
            })
        }
    </div> );
}
 
export default Video;
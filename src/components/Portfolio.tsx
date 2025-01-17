import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const photos = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    title: 'Fashion Photography',
    category: 'Fashion'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4',
    title: 'Nature Close-up',
    category: 'Nature'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1511407397940-d57f68e81203',
    title: 'Urban Architecture',
    category: 'Architecture'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
    title: 'Landscape Vista',
    category: 'Landscape'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    title: 'Street Photography',
    category: 'Street'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1551443874-e8d6a8e561aa',
    title: 'Product Photography',
    category: 'Product'
  }
];

export default function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Our Photography</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Capturing moments that tell stories and evoke emotions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <motion.img
                src={`${photo.url}?auto=format&fit=crop&w=800&q=80`}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2">{photo.title}</h3>
                  <p className="text-sm text-gray-300">{photo.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
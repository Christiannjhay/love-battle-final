import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'; 

function HomePage() {
  const { userId } = useParams();
  const [coupleNames, setCoupleNames] = useState({ couple_1_Name: '', couple_2_Name: '' });
  useEffect(() => {
    const fetchCoupleNames = async () => {
      try {
        const response = await fetch(`http://localhost:5209/api/couple?userId=${userId}`);
        if (response.ok) {
          const data = await response.json();
          setCoupleNames(data);
        } else {
        
        }
      } catch (error) {
       
      }
    };
    
    fetchCoupleNames();
  }, [userId]);

  return (
    <div>
      <p>{coupleNames.couple_1_Name} and {coupleNames.couple_2_Name}</p> 
    </div>
  );
}

export default HomePage;

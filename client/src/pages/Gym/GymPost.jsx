import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import GymPostName from '../../components/Gym/Post/PostName';
import GymPostAddress from '../../components/Gym/Post/PostAddress';
import GymPostPhoneNumber from '../../components/Gym/Post/PostPhoneNumber';
import GymPostImage from '../../components/Gym/Post/PostImage';
import GymPostFacilities from '../../components/Gym/Post/PostFacilities';
import GymPostDetailPrice from '../../components/Gym/Post/PostDetailPrice';
import GymPostHours from '../../components/Gym/Post/PostHours';
import GymPostPrice from '../../components/Gym/Post/PostPrice';
import BasicButton from '../../components/UI/Button/BasicButton';
import useStore from '../../state/useStore';
import Today from '../../components/UI/Today';

function GymPostPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageUrl, setImageUrl] = useState('');
  const { gyms } = useStore();
  // const navigate = useNavigate();

  const onSubmit = async data => {
    const facility = [
      data.shower === false
        ? ''
        : {
            facilityId: 1,
            facilityName: '샤워실',
          },
      data.locker === false
        ? ''
        : {
            facilityId: 2,
            facilityName: '락커룸',
          },
      data.parking === false
        ? ''
        : {
            facilityId: 3,
            facilityName: '주차장',
          },
      data.sportsWear === false
        ? ''
        : {
            facilityId: 4,
            facilityName: '운동복 대여',
          },
    ];

    while (facility.indexOf('') !== -1) {
      facility.splice(facility.indexOf(''), 1);
    }

    const gymsData = {
      gymId: gyms.length + 1,
      createdAt: Today(),
      gymName: data.gymName,
      gymImage: imageUrl,
      address: `${data.address1} ${data.address2}`,
      phoneNumber: data.phoneNumber,
      prices: data.price,
      detailPrices: data.detailPrice,
      businessHours: data.businessHours,
      gymBookmarkCnt: 0,
      facilities: facility,
    };

    console.log(gymsData);
    // await axios.post('/gyms', gymsData);
    // navigate('/gyms');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <GymPostName register={register} errors={errors} />
      <GymPostImage
        imageUrl={imageUrl}
        register={register}
        errors={errors}
        setImageUrl={setImageUrl}
      />
      <GymPostFacilities register={register} />
      <GymPostPrice register={register} errors={errors} />
      <GymPostDetailPrice register={register} errors={errors} />
      <GymPostHours register={register} errors={errors} />
      <GymPostAddress register={register} errors={errors} />
      <GymPostPhoneNumber register={register} errors={errors} />
      <BasicButton page="board" text="Post" />
    </form>
  );
}

export default GymPostPage;

import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TreatmentDetailPage } from '../components/treatments/TreatmentDetailPage';
import { CLINIC_MACHINES } from '../data/clinicData';

interface TreatmentDetailPageWrapperProps {
  onBookClick: () => void;
}

export const TreatmentDetailPageWrapper: React.FC<TreatmentDetailPageWrapperProps> = ({ onBookClick }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const machineId = id || CLINIC_MACHINES[0].id;

  const handleBack = () => {
    navigate('/clinic');
  };

  return (
    <TreatmentDetailPage
      machineId={machineId}
      onBack={handleBack}
      onBookClick={onBookClick}
      onSelectMachine={(newId) => navigate(`/treatments/${newId}`)}
    />
  );
};

export default TreatmentDetailPageWrapper;

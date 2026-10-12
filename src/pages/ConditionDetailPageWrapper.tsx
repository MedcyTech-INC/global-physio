import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ConditionDetailPage } from '../components/conditions/ConditionDetailPage';

interface ConditionDetailPageWrapperProps {
  onBookClick: () => void;
}

export const ConditionDetailPageWrapper: React.FC<ConditionDetailPageWrapperProps> = ({ onBookClick }) => {
  const { serviceId, conditionId } = useParams<{ serviceId?: string; conditionId?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const currentConditionId = conditionId || 'back-pain';
  const currentServiceId = serviceId || 'orthopedic-conditions';

  const handleBack = () => {
    navigate(`/services/${currentServiceId}`, { state: location.state });
  };

  const handleAllServices = () => {
    if (location.state?.from === 'home' || location.state?.from === '/') {
      navigate('/#services-preview');
    } else {
      navigate('/services');
    }
  };

  const handleSelectCondition = (newConditionId: string) => {
    navigate(`/services/${currentServiceId}/${newConditionId}`, { state: location.state });
  };

  return (
    <ConditionDetailPage
      conditionId={currentConditionId}
      onBack={handleBack}
      onAllServicesClick={handleAllServices}
      onBookClick={onBookClick}
      onSelectCondition={handleSelectCondition}
    />
  );
};

export default ConditionDetailPageWrapper;


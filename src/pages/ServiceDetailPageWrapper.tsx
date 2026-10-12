import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { ServiceDetailPage } from '../components/conditions/ServiceDetailPage';
import { CLINIC_SERVICES } from '../data/clinicData';

interface ServiceDetailPageWrapperProps {
  onBookClick: () => void;
}

export const ServiceDetailPageWrapper: React.FC<ServiceDetailPageWrapperProps> = ({ onBookClick }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const serviceId = id || CLINIC_SERVICES[0].id;

  const handleBack = () => {
    if (location.state?.from === 'home' || location.state?.from === '/') {
      navigate('/#services-preview');
    } else {
      navigate('/services');
    }
  };

  return (
    <ServiceDetailPage
      serviceId={serviceId}
      onBack={handleBack}
      onBookClick={onBookClick}
      onSelectService={(newId) => navigate(`/services/${newId}`, { state: location.state })}
    />
  );
};

export default ServiceDetailPageWrapper;


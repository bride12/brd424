package edu.wgu.d424_sample_code.repository;


import edu.wgu.d424_sample_code.entity.ReservationEntity;
import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<ReservationEntity, Long> {
}
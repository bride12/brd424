package edu.wgu.d424_sample_code.repository;

import edu.wgu.d424_sample_code.entity.RoomEntity;
import org.springframework.data.repository.CrudRepository;



public interface RoomRepository extends CrudRepository<RoomEntity, Long> {

	//RoomEntity findById(Long id);
}

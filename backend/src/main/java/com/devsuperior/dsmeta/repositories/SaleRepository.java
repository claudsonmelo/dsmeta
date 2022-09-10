package com.devsuperior.dsmeta.repositories;

import java.awt.print.Pageable;
import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmeta.entities.Sale;
import com.twilio.base.Page;

public interface SaleRepository extends JpaRepository<Sale, Long>{


}

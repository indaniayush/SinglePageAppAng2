package org.spring.service;

import org.spring.component.LauncherObj;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service("launcherService")
@Transactional
public class LauncherService {
	
	public String findAll(LauncherObj launcherObj){
		System.out.println(launcherObj.getId());
		return launcherObj.getId();
	}
}

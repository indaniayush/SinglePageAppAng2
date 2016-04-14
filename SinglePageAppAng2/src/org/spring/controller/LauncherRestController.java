package org.spring.controller;

import org.spring.component.LauncherObj;
import org.spring.service.LauncherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@RequestMapping(value="/adminRest")
public class LauncherRestController {
	
	@Autowired
	LauncherService launcherService;
	
	@RequestMapping(value="/findAll" ,method = RequestMethod.POST)
	public ResponseEntity<LauncherObj> findAll(@RequestBody LauncherObj launcherObj ){
		return new ResponseEntity<LauncherObj>((launcherObj), HttpStatus.OK); 
	}
	
	@RequestMapping(value="/findObj/{id}" ,method = RequestMethod.GET)
	public ResponseEntity<LauncherObj> findObj(@PathVariable("id") String id){
		LauncherObj launcherObj= new LauncherObj();
		launcherObj.setId(id);
		launcherObj.setUserName("admin");
		return new ResponseEntity<LauncherObj>((launcherObj), HttpStatus.OK); 
	}
}
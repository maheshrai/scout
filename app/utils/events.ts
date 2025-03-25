const getEvents = (location) => {

    // create a random events array
    const eventList = [{
        location: "Palm Valley",
        equipment_type: "Transformer",
        device: "Transformer",
        event_date: "8/30/2022",
        description: "Substation Tech  Planned Switching Upon completing the actual field switching portion of the switching procedure, closing and checking closed PV361 (08:06) ECC would verify that the field persons were “in the clear”, this would be verified, and all tags removed, checked closed and breaker placed on remote.  This was performed as prescribed.  Substation Tech and the apprentice was a safe distance (estimated over 100 yards) from this breaker and PT (potential metering transformer) and was behind his vehicle, by the control house to safely observe this close procedure.  ECC announced they were closing the breaker; the breaker came closed and the PT failed immediately upon energizing.  ECC was notified of the failure and Sub Tech and apprentice insured the area was safe and  de energized and that it was safe and secure.  They did observe three small areas that were still burning, and they discharged a fire extinguisher and easily controlled these areas.  This was a failed safe example and the field persons followed procedures that prevented potential injury."
      }, {
        location: "Palm Valley",
        equipment_type: "Transformer",
        event_date: "5/13/2020",
        description: "P&C Tech and Journeyman Performing energizing substation While energizing substation, closed in from the Palm Valley end to prove the secondary's of the PT's, measured the voltages of the PT's which showed incorrect voltage.  Asked ECC to open the line due to the voltages being incorrect.  While measuring the secondary's, voltage was still showing on the PT's with line deenergized (heard noise coming from 'C' phase PT).  Snap grounded the fuse box on the secondary side, still showed voltage.  Snap grounded again, but heard the noise travel from 'C' phase to 'A' phase but showed much lower voltage and made necessary changes to 'B' phase using secondary gloves.  Called ECC to reenergize line and 'A' phase PT blew. "
      }
    ];
  
    return eventList;
  };
  
  export { getEvents };
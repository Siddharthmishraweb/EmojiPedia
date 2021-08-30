import React from 'react';
    function Entry(entry){
        return      (  <div className="term">
                          <dt>
                              <span className="emoji" role="img" aria-label="Tense Biceps">
                                {entry.emoji}
                              </span>
                              <span>{entry.name}</span>
                           </dt>
                            <dd>
                              {entry.meaning}
                            </dd>
                        </div>);
    }

export default Entry;
/**
 * EntityFunctionTemplates.js
 */

class EntityFunctionTemplates {
    //////////////////////////////////////////////////////////////////////////
    //
    //  Some useful template functions
    //
    //////////////////////////////////////////////////////////////////////////

    /**
     *  tests to see if an entity is overlapping any of a number of entities
     *  stored in a std container
     */
    static Overlapped( ob, conOb ) {
        return Overlapped( ob, conOb, 40.0 );
    };

    static Overlapped( ob, conOb, MinDistBetweenObstacles ) {
        let it = conOb.listIterator();

        while ( it.hasNext() ) {
            let curOb = it.next();
            if (TwoCirclesOverlapped(ob.Pos(),
                    ob.BRadius() + MinDistBetweenObstacles,
                    curOb.Pos(),
                    curOb.BRadius())) {
                return true;
            };
        };

        return false;
    };

    /**
     * tags any entities contained in a std container that are within the
     * radius of the single entity parameter
     */
    static TagNeighbors( entity, others, radius ) {
        let it = others.listIterator();

        //iterate through all entities checking for range
        while ( it.hasNext() ) {
            let curOb = it.next();
            //first clear any current tag
            curOb.UnTag();

            //work in distance squared to avoid sqrts
            let to = sub( curOb.Pos(), entity.Pos() );

            //the bounding radius of the other is taken into account by adding it 
            //to the range
            let range = radius + curOb.BRadius();

            //if entity within range, tag for further consideration
            if ( ( curOb != entity ) && ( to.LengthSq() < range * range ) ) {
                curOb.Tag();
            };

        };//next entity
    };

    /**
     * Given a pointer to an entity and a std container of pointers to nearby
     * entities, this function checks to see if there is an overlap between
     * entities. If there is, then the entities are moved away from each
     * other
     */
    static EnforceNonPenetrationContraint( entity, others ) {
        let it = others.listIterator();

        //iterate through all entities checking for any overlap of bounding
        //radii
        while ( it.hasNext() ) {
            let curOb = it.next();
            //make sure we don't check against this entity
            if ( curOb == entity ) {
                continue;
            };

            //calculate the distance between the positions of the entities
            let ToEntity = sub( entity.Pos(), curOb.Pos() );

            let DistFromEachOther = ToEntity.Length();

            //if this distance is smaller than the sum of their radii then this
            //entity must be moved away in the direction parallel to the
            //ToEntity vector   
            let AmountOfOverLap = curOb.BRadius() + entity.BRadius()
                    - DistFromEachOther;

            if ( AmountOfOverLap >= 0 ) {
                //move the entity a distance away equivalent to the amount of overlap.
                entity.SetPos( add( entity.Pos(), mul( div( ToEntity, DistFromEachOther ),
                        AmountOfOverLap ) ) );
            };
        };//next entity
    };
};
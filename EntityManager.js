/**
 * Desc:   Singleton class to handle the  management of Entities.          
 * 
 * EntityManager.js
 */

class EntityManager {
    //provide easy access

    //to facilitate quick lookup the entities are stored in a std::map, in which
    //pointers to entities are cross referenced by their identifying number

    constructor() {
            this.m_EntityMap = new Array();
    };

    //--------------------------- Instance ----------------------------------------
    //   this class is a singleton
    //-----------------------------------------------------------------------------
    Instance() {
        return this;
    };

    /**
     * this method stores a pointer to the entity in the std::vector
     * m_Entities at the index position indicated by the entity's ID
     * (makes for faster access)
     */
     RegisterEntity( NewEntity ) {
        this.m_EntityMap[ NewEntity.ID() ] = NewEntity;
    };

    /**
     * @return a pointer to the entity with the ID given as a parameter
     */
    GetEntityFromID( id ) {
        //find the entity
        let ent = this.m_EntityMap[ id ];

        //assert that the entity is a member of the map
        if ( !( ent != null ) ){ 
            console.log( "<EntityManager::GetEntityFromID>: invalid ID" );
        };

        return ent;
    };

    /**
     * this method removes the entity from the list
     */
    RemoveEntity( pEntity ) {
        this.m_EntityMap.splice( pEntity.ID(), 1 );
    };

    /**
     * clears all entities from the entity map
     */
    Reset() {
        this.m_EntityMap.length = 0;
    };
};

let EntityMgr = new EntityManager();


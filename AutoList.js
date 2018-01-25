/**
 * AutoList.js
 */

class AutoList {

    constructor() {
        this.m_Members = new HashMap<Class<?>, Object>();
        this.classType = null;
    };

    getList( type ) {
        if ( type == null ) {
            return null;
        };

        if ( !this.m_Members.containsKey( type ) ) {
            this.classType = type;
            this.m_Members.put( type, new LinkedList<T>() );
        };

        return this.m_Members.get(type);
    };

    add( o ) {
        this.getList( o.getClass() ).add( o );
    };

    remove( o ) {
        getList(o.getClass()).remove(o);
    };

    GetAllMembers() {
        let list = getList( classType );
        if ( list != null ) {
            return list;
        }
        return new LinkedList<T>();
    };
};
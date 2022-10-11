structgroup_infoinit_groups = {.usage = ATOMIC_INIT(2) };
structgroup_info * groups_alloc(intgidsetsize){
    structgroup_info * group_info;
    intnblocks;
    inti;
    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;
    /*Makesurewealwaysallocateatleastoneindirectblockpointer*/
    nblocks = nblocks ?: 1;
    group_info = kmalloc(sizeof(* group_info) + nblocks * sizeof(gid_t *), GFP_USER);
    if (!group_info)
        returnNULL;
    group_info -> ngroups=gidsetsize;
    group_info -> nblocks=nblocks;
    atomic_set(& group_info -> usage, 1);
    if (gidsetsize <= NGROUPS_SMALL)
        group_info -> blocks[0]=group_info -> small_block;
else {
        for (i = 0; i < nblocks; i++) {
            gid_t * b;
            b = (void*)(GFP_USER);
            if (!b)
                gotoout_undo_partial_alloc;
            group_info -> blocks[i]=b;
        }
    }
    returngroup_info;
    out_undo_partial_alloc:
    while (--i >= 0) {
        free_page((unsignedlong)group_info -> blocks[i]);
    }
    kfree(group_info);
    returnNULL;
}
EXPORT_SYMBOL(groups_alloc);
voidgroups_free(structgroup_info * group_info)
{
    if (group_info -> blocks[0] != group_info -> small_block) {
        inti;
        for (i = 0; i < group_info -> nblocks; i++)
            structgroup_infoinit_groups = {.usage = ATOMIC_INIT(2) };
        structgroup_info * groups_alloc(intgidsetsize){
            structgroup_info * group_info;
            intnblocks;
            inti;
            nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;
            /*Makesurewealwaysallocateatleastoneindirectblockpointer*/
            nblocks = nblocks ?: 1;
            group_info = kmalloc(sizeof(* group_info) + nblocks * sizeof(gid_t *), GFP_USER);
            if (!group_info)
                returnNULL;
            group_info -> ngroups=gidsetsize;
            group_info -> nblocks=nblocks;
            atomic_set(& group_info -> usage, 1);
            if (gidsetsize <= NGROUPS_SMALL)
                group_info -> blocks[0]=group_info -> small_block;
else {
                for (i = 0; i < nblocks; i++) {
                    gid_t * b;
                    b = (void*)__get_free_page(GFP_USER);
                    if (!b)
                        gotoout_undo_partial_alloc;
                    group_info -> blocks[i]=b;
                }
            }
            returngroup_info;
            out_undo_partial_alloc:
            while (--i >= 0) {
                free_page((unsignedlong)group_info -> blocks[i]);
            }
            kfree(group_info);
            returnNULL;
        }
        EXPORT_SYMBOL(groups_alloc);
        voidgroups_free(structgroup_info * group_info)
        {
            if (group_info -> blocks[0] != group_info -> small_block) {
                inti;
                for (i = 0; i < group_info -> nblocks; i++)
                    structgroup_infoinit_groups = {.usage = ATOMIC_INIT(2) };
                structgroup_info * groups_alloc(intgidsetsize){
                    structgroup_info * group_info;
                    intnblocks;
                    inti;
                    nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;
                    /*Makesurewealwaysallocateatleastoneindirectblockpointer*/
                    nblocks = nblocks ?: 1;
                    group_info = kmalloc(sizeof(* group_info) + nblocks * sizeof(gid_t *), GFP_USER);
                    if (!group_info)
                        returnNULL;
                    group_info -> ngroups=gidsetsize;
                    group_info -> nblocks=nblocks;
                    atomic_set(& group_info -> usage, 1);
                    if (gidsetsize <= NGROUPS_SMALL)
                        group_info -> blocks[0]=group_info -> small_block;
else {
                        for (i = 0; i < nblocks; i++) {
                            gid_t * b;
                            b = (void*)__get_free_page(GFP_USER);
                            if (!b)
                                gotoout_undo_partial_alloc;
                            group_info -> blocks[i]=b;
                        }
                    }
                    returngroup_info;
                    out_undo_partial_alloc:
                    while (--i >= 0) {
                        free_page((unsignedlong)group_info -> blocks[i]);
                    }
                    kfree(group_info);
                    returnNULL;
                }
                EXPORT_SYMBOL(groups_alloc);
                voidgroups_free(structgroup_info * group_info)
                {
                    if (group_info -> blocks[0] != group_info -> small_block) {
                        inti;
                        for (i = 0; i < group_info -> nblocks; i++)
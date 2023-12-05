<?php

namespace App\Http\Controllers;

use App\Models\Domination;
use Illuminate\Http\Request;

class DominationController extends Controller
{
    public function get_domination(Request $request)
    {
        $domination = Domination::where([
            ['date', '=', $request->date],
            ['branchid', '=', $request->branchid],
        ])
            ->when($request->userid == 1, function ($query) use ($request) {
                return $query->where('meridiem', '=', $request->meridiem);
            }, function ($query) use ($request) {
            return $query->where('sellerid', '=', $request->userid);
        })
            ->get();

        return response()->json([
            'status' => $domination,
        ]);
    }
    public function create_domination(Request $request)
    {

        for ($i = 0; $i < count($request->domination); $i++) {
            $exist = Domination::where([['meridiem', '=', $request->meridiem], ['date', '=', $request->date], ['bills', '=', $request->domination[$i]['bills']]])->first();
            if ($exist) {

                Domination::where('id', $request->domination[$i]['id'])->update([
                    'branchid' => $request->branchid,
                    'bills' => $request->domination[$i]['bills'],
                    'pcs' => $request->domination[$i]['pcs'],
                    'total' => $request->domination[$i]['total'],
                    'date' => $request->date,
                    'meridiem' => $request->meridiem
                ]);

            } else {
                Domination::create([
                    'branchid' => $request->branchid,
                    'sellerid' => $request->userid,
                    'bills' => $request->domination[$i]['bills'],
                    'pcs' => $request->domination[$i]['pcs'],
                    'total' => $request->domination[$i]['total'],
                    'date' => $request->date,
                    'meridiem' => $request->meridiem
                ]);
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Successfully Saved'
        ]);
    }
}
